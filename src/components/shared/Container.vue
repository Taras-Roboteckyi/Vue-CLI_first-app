<template>
    <div class="container">
        <slot>Default value</slot>
        <!-- Значення по дефолту, якщо рендерити цей контейнер без вмісту тоді зарендериться дефолтне значення "Default value" -->
    </div>
</template>

<script>
export default {
    name: "containerWrapper"

}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1110px;
    margin: 0 auto;
}
</style>