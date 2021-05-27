import Vue from 'vue'
import Card from './Card'
import Cards from './Cards'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import Callout from './Callout'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globaly.
[
  Card,
  Cards,
  Callout,
  Child,
  Button,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
