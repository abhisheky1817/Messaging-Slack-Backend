import express from 'express';

import { isAuthenticated } from '../../middlewares/authMiddleware.js';

import {
  createWorkspaceController,
    getWorkspacesUserIsMemberOfController,
    deleteWorkspaceController,
    getWorkspaceController,
    getWorkspaceByJoinCodeController,
    updateWorkspaceController,
    addMemberToWorkspaceController,
    addChannelToWorkspaceController
} from '../../controllers/workspaceController.js';

import {
  createWorkspaceSchema,
  addMemberToWorkspaceSchema,
  addChannelToWorkspaceSchema
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

router.get(
  '/join/:joinCode',
  isAuthenticated,
  getWorkspaceByJoinCodeController
);

router.put('/:workspaceId', isAuthenticated, updateWorkspaceController);

router.put( '/:workspaceId/members', isAuthenticated, validate(addMemberToWorkspaceSchema), addMemberToWorkspaceController );

router.put( '/:workspaceId/channels', isAuthenticated, validate(addChannelToWorkspaceSchema),addChannelToWorkspaceController);

export default router;