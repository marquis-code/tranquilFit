<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-4">Workflows</h1>
    <div class="flex justify-between">
      <div class="w-6/12 border-2 border-red-500">
        <workflow-creator></workflow-creator>
      </div>
      <div class="w-6/12 border-2 border-red-500">
        <workflow-timeline></workflow-timeline>
      </div>
    </div>
  </div>
</template>


<style>
/* Add page-specific styles here */
.container {
  max-width: 1200px;
}
</style>