<template>
    <div class="text-center mt-10">
        Hello, :)<br>
        my name is {{ name }} and I am a software developer from {{ country }}.

        <br><br>

        {{ members }}

    </div>

</template>

<script>

import axios from 'axios'

export default {
    name: "Home",

    data () {
        return {
            name: "Ricardo Rocha",
            country: "Portugal",

            members: []
        }
    },
    mounted: function() {

        this.getData()

    },
    methods: {

        getData() {
            axios.get("http://ricr.dev/api/members.php")
                .then(response => (this.members = response.data))
        }

    }
}

</script>