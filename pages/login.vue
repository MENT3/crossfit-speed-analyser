<script setup>
const supabase = useSupabaseClient()
const toast = useToast()

const loading = ref(false)
const state = ref({
  email: undefined,
  password: undefined
})

async function handleLogin(e) {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword(e.data)
    if (error) throw error
    navigateTo('/')
  } catch (error) {
    toast.add({
      icon: 'i-heroicons-exclamation-circle',
      title: 'Une erreur est survenue',
      description: error.error_description
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1 class="mb-2 text-lg font-semibold">
    Connexion
  </h1>

  <UForm @submit.prevent="handleLogin" :state="state">
    <div class="flex flex-col space-y-3">
      <UFormGroup>
        <UInput
          v-model="state.email"
          type="text"
          size="md"
          placeholder="Ex: alec@rxcomp.com"
        />
      </UFormGroup>

      <UFormGroup>
        <UInput
          v-model="state.password"
          type="password"
          size="md"
          placeholder="Ex: **********"
        />
      </UFormGroup>

      <UButton
        :loading="loading"
        type="submit"
        color="black"
        size="md"
        block
      >
        Connexion
      </UButton>
    </div>
  </UForm>

  <div class="mt-2 text-center">
    <span class="text-sm ">
      Vous n'avez pas de compte ?
      <ULink to="/register" class="text-cyan-600 underline">Créez en un</ULink>
    </span>
  </div>
</template>
