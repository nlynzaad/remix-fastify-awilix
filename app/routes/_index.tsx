import {json, type LoaderFunctionArgs, type MetaFunction} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({context}: LoaderFunctionArgs) => {
  const singletonValue1 = context.di.singletonRandomNumber.number;
  const singletonValue2 = context.di.singletonRandomNumber.number;

  const scopedValue1 = context.di.scopedRandomNumber.number;
  const scopedValue2 = context.di.scopedRandomNumber.number;

  const transientValue1 = context.di.transientRandomNumber.number;
  const transientValue2 = context.di.transientRandomNumber.number;

  return json({
    singletonValue1,
    singletonValue2,
    transientValue1,
    transientValue2,
    scopedValue1,
    scopedValue2,
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div>Singleton Value1: {data.singletonValue1}</div>
      <div>Singleton Value2: {data.singletonValue2}</div>
      <div>transient Value1: {data.transientValue1}</div>
      <div>transient Value2: {data.transientValue2}</div>
      <div>scoped Value1: {data.scopedValue1}</div>
      <div>scoped Value2: {data.scopedValue2}</div>
    </div>
  );
}
