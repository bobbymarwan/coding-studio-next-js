import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <div>
      <Suspense fallback={ <Loading/> }>
        <img src="https://dummyimage.com/300/09f.png/fff" alt="dummy image" />
      </Suspense>
      HALO THIS IS ABOUT PAGE
    </div>
  );
}
