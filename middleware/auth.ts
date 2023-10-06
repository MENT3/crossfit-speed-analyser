export default defineNuxtRouteMiddleware(async to => {
  const user = await useSupabaseUser()

  if (!user.value) {
    return navigateTo('/login')
  }
})
