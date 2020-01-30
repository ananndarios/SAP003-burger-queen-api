import {Router} from 'express'
import ProductController from '../controllers/productController'

const router = Router()
router.get('/', ProductController.getAll)
router.post('/', ProductController.addAll)
// router.get('/:id', ProductController.getAuthor)
// router.put('/:id', ProductController.updatedAuthor)
// router.delete('/:id', ProductController.deleteAuthor)
export default router;