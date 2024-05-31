<script lang="ts" setup>

</script>

<template>
    <header class="flex items-center justify-between p-4 h-[80px] bg-white w-full z-10 border-b fixed top-0">
        <p class="text-3xl font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
            VerbalCom</p>
        <div>
            <div class="focus-within:bg-gradient-to-tr from-primary to-secondary rounded p-[1px]">
                <div class="border bg-white rounded p-2 flex items-center">
                    <input class="outline-none" type="text" placeholder="Search sample...">
                    <button
                        class="rounded bg-gradient-to-tr from-primary to-secondary p-1 text-sm text-white text-center flex items-center justify-between">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>
