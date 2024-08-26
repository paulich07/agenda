<template>
    <div class="child">
        <h2>Clicks: {{ totalClicks }}</h2>
    </div>
</template>

<script>
export default {
    props: ['totalClicks']
}
</script>

<style >
.child {
    width: 300px;
    height: 150px;
    display: block;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: #35353565;
    padding: 5px;
    border-radius: 50%;
}
</style>
