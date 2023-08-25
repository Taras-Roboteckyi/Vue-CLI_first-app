<template>
    <notifications classes="vue-notification " />
    <!-- group="foo" - використовується якщо є декілька нотифікашок різного типу -->
</template>

<script>
export default {
    name: 'NotificationsComponent'
}
</script>

<style lang="scss" scoped>
/* scoped підхід не може додати атрибути внутрішнім компонентам , щоб це було можливо потрібно додати ::v-deep */
::v-deep .vue-notification {
    // styling
    margin: 0 5px 5px;
    padding: 10px;
    font-size: 12px;
    color: #ffffff;

    // default (blue)
    background: #44A4FC;
    border-left: 5px solid #187FE7;

    .notification-title {
        font-size: 16px;
        line-height: 1.3;
    }

    .notification-content {
        font-size: 14px;
        margin-top: 5px;
    }

    // types (green, amber, red)

    &.success {
        background: #68CD86;
        border-left-color: #42A85F;
    }

    &.warn {
        background: #ffb648;
        border-left-color: #f48a06;
    }

    &.error {
        background: #E54D42;
        border-left-color: #B82E24;
    }
}
</style>