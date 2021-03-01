<template>
  <div class="w-auto lg:w-1/2">
    <h1 class="text-5xl mb-8">Hi there, my name is Amir.</h1>
    <p class="font-light text-lg">
      I am a software engineer, mentor and parent in San Francisco. I am currently an engineering manager at
      <a href="https://about.google" target="_blank" rel="noopener">Google</a>. Previously, I have worked at
      <a target="_blank" rel="noopener" href="https://www.oracle.com/industries/utilities/products/what-is-opower.html"> Opower</a>, Capital One and a few other
      start ups.
    </p>
    <div class="mt-8 flex flex-wrap -m-2">
      <a class="btn bg-purple-500 hover:bg-purple-600" href="https://github.com/amir20">
        <i class="w-4 h-4 mr-2 fab fa-github"></i>
        <span>GitHub</span>
      </a>
      <a class="btn bg-blue-500 hover:bg-blue-600" href="https://www.linkedin.com/in/amirraminfar">
        <i class="w-4 h-4 mr-2 fab fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a class="btn bg-green-600 hover:bg-green-700" href="https://stackoverflow.com/users/419075/amir-raminfar">
        <i class="w-4 h-4 mr-2 fab fa-stack-overflow"></i>
        <span>Stack Overflow</span>
      </a>
    </div>
  </div>
</template>
<style scoped lang="postcss">
h1 {
  font-family: "Playfair Display", serif;
}

.btn {
  @apply text-white py-2 px-4 m-2 rounded-3xl inline-flex items-center no-underline;
}
</style>
