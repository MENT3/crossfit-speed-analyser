<script setup>
const supabase = useSupabaseClient()
const toast = useToast()

const loading = ref(false)
const state = ref({
  email: '',
  password: ''
})

function createValues(analysisId) {
  return [...Array(7)].map((_, i) => ({ percent: i+2*10, speed: 0.5, analysis_id: analysisId }))
}

async function handleSignUp(e) {
  try {
    loading.value = true
    // create user
    const { data: { user }, error } = await supabase.auth.signUp(e.data)
    if (error) throw error
    // create default values
    for (let i = 1; i <= 2; i++) {
      const { data: analysis } = await supabase.from('analysis').insert({ user_id: user.id, movement_id: i }).select('id').single()
      await supabase.from('values').upsert(createValues(analysis.id))
    }

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
    Inscription
  </h1>

  <UForm @submit.prevent="handleSignUp" :state="state">
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
        Inscription
      </UButton>
    </div>
  </UForm>

  <div class="mt-2 text-center">
    <span class="text-sm ">
      Vous avez déjà un compte ?
      <ULink to="/login" class="text-cyan-600 underline">Connectez-vous</ULink>
    </span>
  </div>
</template>
