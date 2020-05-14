const express = require("express");
const incomeAllocationController = require("../controllers/incomeAllocation");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/", authenticate, incomeAllocationController.getAllAllocations);

router.get("/:id", incomeAllocationController.getAllocationById);

router.post("/", incomeAllocationController.createAllocation);

router.put("/:id", incomeAllocationController.updateAllocationById);

router.delete(
  "/:userName",
  authenticate,
  incomeAllocationController.deleteALlocationByAllocationId
);

module.exports = router;
