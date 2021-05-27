<template>
    <div class="invalid-feedback">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['errors'],
    }
</script>