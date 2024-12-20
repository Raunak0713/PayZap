"use server";

import requireUser from "./utils/hooks";
import { parseWithZod } from "@conform-to/zod"
import onBoardingSchema from "./utils/zodSchemas";
import prisma from "./utils/db";
import { redirect } from "next/navigation";

const onBoardUser = async (prevState : any,formData : FormData) => {
  const session = await requireUser();

  const submission = parseWithZod(formData , {
    schema : onBoardingSchema
  })

  if(submission.status !== "success"){
    return submission.reply()
  }

  const data = await prisma.user.update({
    where : {
      id : session.user?.id
    },
    data : {
      firstName : submission.value.firstName,
      lastName : submission.value.lastName,
      address : submission.value.address
    }
  })

  return redirect("/dashboard")
}

export default onBoardUser;