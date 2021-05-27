<!DOCTYPE html>
<html>
    <head>
        <title><?php echo e(__('mail.proposal')); ?></title>
    </head>
    <body>
        <p><?php echo e(__('mail.proposal_description')); ?></p>
        <p><?php echo e(__('mail.client')); ?>: <?php echo e($client); ?> - <?php echo e(__('mail.'.$client_type)); ?></p>
        <p><?php echo e(__('mail.main_category')); ?>: <?php echo e($main_category); ?></p>
        <p><?php echo e(__('mail.sub_category')); ?>: <?php echo e($sub_category); ?></p>
        <p><?php echo e(__('mail.properties')); ?>:</p>
        <?php if($properties): ?>
            <?php $__currentLoopData = $properties; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <p>&nbsp;<?php echo e($key + 1); ?>. <?php echo e($item->name); ?></p>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
    </body>
</html>
