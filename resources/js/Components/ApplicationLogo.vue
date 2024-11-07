<template>
    <img :src="logoUrl" alt="Logo ULS" style="width: 170px; height: auto;">
</template>

<script>
export default {
    data() {
        return {
            logoUrl: import.meta.env.VITE_LOGO_URL
        }
    }
}
</script>
