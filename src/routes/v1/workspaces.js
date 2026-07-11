import express from 'express';

import { isAuthenticated } from '../../middlewares/authMiddleware.js';

import {
  createWorkspaceController,
    getWorkspacesUserIsMemberOfController,
    deleteWorkspaceController,
    getWorkspaceController
} from '../../controllers/workspaceController.js';

import {
  createWorkspaceSchema
} from '../../validators/workspaceSchema.js';

import { validate } from '../../validators/zodValidator.js';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  validate(createWorkspaceSchema),
  createWorkspaceController
);

router.get('/', isAuthenticated, getWorkspacesUserIsMemberOfController);

router.delete('/:workspaceId', isAuthenticated, deleteWorkspaceController);

router.get('/:workspaceId', isAuthenticated, getWorkspaceController);

export default router;