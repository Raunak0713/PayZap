import { z } from "zod"

const onBoardingSchema = z.object({
  firstName : z.string().min(2, "First name is required"),
  lastName : z.string().min(2, "Last name is required"),
  address : z.string().min(2, "Address is required"),
})

export default onBoardingSchema