<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card-group mb-4">
            <div class="card p-4">
              <div class="card-body">
                <card :title="$t('login')">
                  <p class="text-muted"> {{$t('sign_in')}}</p>
                  <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                    <div class="input-group mb-3">
                      <span class="input-group-addon"><i class="icon-user"></i></span>
                      <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" type="email" name="email" :placeholder="$t('email')" />
                      <has-error :form="form" field="email"/>
                    </div>
                    <div class="input-group mb-4">
                      <span class="input-group-addon"><i class="icon-lock"></i></span>
                      <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" :placeholder="$t('password')" />
                      <has-error :form="form" field="password"/>
                    </div>
                    <div class="row">
                      <div class="col-6 text-right">
                        <v-button :loading="form.busy">
                          {{ $t('login') }}
                        </v-button>
                      </div>
                      <div class="col-6 text-right">
                        <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                          {{ $t('forgot_password') }}
                        </router-link>
                      </div>
                    </div>
                  </form>
                </card>
              </div>
            </div>
            <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-body text-center">
                <div>
                  
                  <h2>  {{ $t('title') }}</h2>
                  <p> {{ $t('paragraph-1') }}</p>
                </div>
              </div>
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
   // LoginWithGithub
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'dashboard' })
    }
  }
}
</script>
