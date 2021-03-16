<template>
    <div class="text-center mt-10">
        Hello, :)<br>
        my name is {{ name }} and I am a software developer from {{ country }}.
    </div>
</template>

<script>

export default {
    name: "Home",

    data() {
        return {
            name: "Ricardo Rocha",
            country: "Portugal"
        }
    }
}

</script>
