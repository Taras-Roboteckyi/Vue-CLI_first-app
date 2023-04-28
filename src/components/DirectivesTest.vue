<template>
    <div v-if="isVisible">
        <h1>Title Directives</h1>
        <ul>
            <template v-for="fruit in fruits">
                <li v-if="fruit === 'banana'" :key="fruit">{{ fruit }}</li>
            </template>
        </ul>
        <ul>

            <li v-for="(car, key) in cars" :key="key">{{ car }}</li>

        </ul>
    </div>
</template>

<script>
export default {
    name: "DirectiveTests",
    data() {
        return {
            isVisible: true,
            fruits: ["apple", "banana", "kiwi"],
            cars: {
                audi: { color: "red" },
                bmw: { color: "black" }
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>