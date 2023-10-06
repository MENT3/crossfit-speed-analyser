<script setup>
const supabase = useSupabaseClient()

const loading = ref(false)
const creds = reactive({
  email: 'clement.ramoslage@gmail.com',
  password: 'P@ssword1234'
})

const handleLogin = async () => {
  try {
    loading.value = true
    const { email, password } = creds
    const { error } = await supabase.auth.signInWithPassword({ email: email, password: password})
    if (error) throw error
    navigateTo('/home')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="row flex-center flex" @submit.prevent="handleLogin">
    <div class="col-6 form-widget">
      <h1 class="header">Supabase + Nuxt 3</h1>
      <p class="description">Sign in via magic link with your email below</p>
      <div>
        <input class="inputField" type="email" placeholder="Your email" v-model="creds.email" />
        <input class="inputField" type="password" placeholder="Your password" v-model="creds.password" />
      </div>
      <div>
        <input
          type="submit"
          class="button block"
          :value="loading ? 'Loading' : 'Login'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>
