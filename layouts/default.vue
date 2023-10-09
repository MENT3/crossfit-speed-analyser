<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

async function logout() {
  const { error } = await client.auth.signOut()
  if (error) throw error
  navigateTo('/login')
}
</script>

<template>
  <div>
    <div class="sticky inset-0 mb-4 px-4 py-3 h-12 bg-gray-900 flex items-center justify-between z-50">
      <div class="h-full flex items-center space-x-2">
        <img src="@/assets/img/logo.webp" class="h-full" />
        <span class="text-white font-bold">
          RXCOMP - Speed Calculator
        </span>
      </div>

      <UButton
        v-if="user"
        icon="i-heroicons-arrow-left-on-rectangle"
        size="sm"
        color="black"
        square
        @click="logout"
      />
    </div>

    <UContainer>
      <slot />
    </UContainer>

    <UNotifications />
  </div>
</template>
