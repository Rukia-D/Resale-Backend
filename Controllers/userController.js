const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError, UnauthenticatedError } = require("../errors");
dotenv.config();

const prisma = new PrismaClient();

const updateUser = asyncHandler(async (req, res) => {
  try {
    const { user } = req;
    const userId = parseInt(req.params.id, 10);
    const { phoneNumber, upiId, profilePicture } = req.body;

    if (!user) {
      throw new BadRequestError('Something went wrong');
    }

    if (user.userId !== userId) {
      throw new UnauthenticatedError('User is not permitted to edit this profile');
    }

    const updatedData = {};
    if (phoneNumber) updatedData.phoneNumber = phoneNumber;
    if (upiId) updatedData.upiId = upiId;
    if (profilePicture) updatedData.profilePicture = profilePicture

    const foundUser = await prisma.user.update({
      where: { userId: parseInt(userId) },
      data: updatedData,
    });

    if (!foundUser) {
      throw new NotFoundError('User does not exist');
    }

    res.status(StatusCodes.OK).json(foundUser);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});

const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user.userId;

  const user = await prisma.user.findUnique({
    where: { userId },
  });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  res.status(200).json(user);
});

module.exports = { updateUser, getCurrentUserProfile};