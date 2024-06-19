/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
}),

router.get('/user/:id', [UsersController, 'index']);
router.post('/user-post', [UsersController, 'create']);
router.post('/shorten', [UsersController, 'shorten']);
router.get('/url/:identifier', [UsersController, 'redirect']);

