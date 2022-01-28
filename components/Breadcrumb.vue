<template>
    <div>
        <ol class="breadcrumb">
            <li>
                <nuxt-link to="/">{{ initLink }}</nuxt-link>
            </li>
            <li class="active">
                {{ mainLink }}
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: {
            initLink: String,
            mainLink: String
        }
    }
</script>

<style scoped>
    .breadcrumb {
        background: none;
        padding: 0;
        margin: 30px 0 0px 0;
    }
</style>