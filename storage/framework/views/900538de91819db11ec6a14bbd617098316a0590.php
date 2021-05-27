<?php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
    'filesRoot' => config('filesystems.disks.public.url'),
    'rootUrl' => config('app.url')
];

$polyfills = [
    'Promise',
    'Object.assign',
    'Object.values',
    'Array.prototype.find',
    'Array.prototype.findIndex',
    'Array.prototype.includes',
    'String.prototype.includes',
    'String.prototype.startsWith',
    'String.prototype.endsWith',
];
?>
<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title><?php echo e(config('app.name')); ?></title>

  <link rel="stylesheet" href="<?php echo e(mix('css/app.css')); ?>">
</head>
<body>
  <div id="app"></div>

  
  <script>window.config = <?php echo json_encode($config, 15, 512) ?>;</script>

  
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=<?php echo e(implode(',', $polyfills)); ?>"></script>

  
  <?php if(app()->isLocal()): ?>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
  <?php else: ?>
    <script src="<?php echo e(mix('js/manifest.js')); ?>"></script>
    <script src="<?php echo e(mix('js/vendor.js')); ?>"></script>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
  <?php endif; ?>
</body>
</html>
