import type {
  ActionFunction,
  LoaderFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/utils/session.server";

export const action: ActionFunction = async ({
  request,
}) => {
  console.log('request###########:',request.headers)
  return logout(request);
   //logout 함수에 request를 보내면 request.headers.get으로 헤더에 쿠키 값을 가져와서 null로 만든다
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};