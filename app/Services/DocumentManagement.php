<?php

namespace App\Http\Services;

use App\Models\Document;
use Illuminate\Support\Facades\Storage;

class DocumentManagement
{
    public function storeFile($file, $table_name, $record_id)
    {
        try {
            $file_name = time() . '.' . $file->getClientOriginalExtension();
            $original_name = $file->getClientOriginalName();

            $path = 'dms/' . $table_name . '/' . $file_name;
            Storage::disk('public')->put($path, file_get_contents($file), 'public');

            $doc = new Document();
            $doc->table_name = $table_name;
            $doc->record_id = $record_id;
            $doc->name = $file_name;
            $doc->path = $path;
            $doc->original_name = $original_name;

            $doc->save();

            return $path;
        } catch (Exception $ex) {
            return '';
        }
    }

    public function removeFile($table_name, $record_id)
    {
        try {
            $doc = Document::where(['table_name' => $table_name, 'record_id' => $record_id])->first();
            if ($doc) {
                $url = 'public/' . $doc->path;

                if (Storage::exists($url)) {
                    Storage::delete($url);
                }

                $doc->delete();
            }
        } catch (Exception $ex) {
            return '';
        }
    }

    public function removeMultipleFile($table_name, $record_id)
    {
        try {
            $docs = Document::where(['table_name' => $table_name, 'record_id' => $record_id])->get();
            if ($docs) {
                foreach ($docs as $doc) {
                    $url = 'public/' . $doc->path;

                    if (Storage::exists($url)) {
                        Storage::delete($url);
                    }

                    $doc->delete();
                }
            }
        } catch (Exception $ex) {
            return '';
        }
    }

    public function removeFileById($doc_id)
    {
        try {
            $doc = Document::find($doc_id);
            if ($doc) {
                $url = 'public/' . $doc->path;

                if (Storage::exists($url)) {
                    Storage::delete($url);
                }
                $doc->delete();
            }
        } catch (Exception $ex) {
            return '';
        }
    }
}
