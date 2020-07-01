<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" 
                role="progressbar" 
                :style="{width: `${((quoteCount / maxQuotes) * 100)}%`}"
                aria-valuenow="100" 
                aria-valuemin="0" 
                aria-valuemax="100">
                    {{ quoteCount }} / {{ maxQuotes }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['quoteCount', 'maxQuotes']
}
</script>