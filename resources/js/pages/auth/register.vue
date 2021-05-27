<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card mx-4">
            <div class="card-body p-4">
              <card :title="$t('register')">
                <form @submit.prevent="register" @keydown="form.onKeydown($event)">
                  <p class="text-muted">Create your account</p>
                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-user"></i></span>
                    <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" :placeholder="$t('name')">
                    <has-error :form="form" field="name"/>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-email"></i></span>
                     <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" :placeholder="$t('email')">
                    <has-error :form="form" field="email"/>
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" :placeholder="$t('password')">
                    <has-error :form="form" field="password"/>
                  </div>

                  <div class="input-group mb-4">
                    <span class="input-group-addon"><i class="icon-lock"></i></span>
                    <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation" :placeholder="$t('confirm_password')">
                    <has-error :form="form" field="password_confirmation"/>
                  </div>
                  <div class="input-group mb-3">
                    <div class="col-md-7 offset-md-4 d-flex">
                      <!-- Submit Button -->
                      <v-button :loading="form.busy">
                        {{ $t('register') }}
                      </v-button>
                    </div>
                  </div>
                </form>
              </card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
//import LoginWithGithub from '~/components/LoginWithGithub'

export default {
  middleware: 'guest',
  layout: 'nosidebar',
  
  components: {
    //LoginWithGithub
  },

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Log in the user.
      const { data: { token } } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', { token })

      // Update the user.
      await this.$store.dispatch('auth/updateUser', { user: data })

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
