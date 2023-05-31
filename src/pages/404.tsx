import { Context } from "@/context/layout";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux"

export default function NotFound() {
  const { buttonsMenu } = useSelector((rootReducer: any) => rootReducer.menuReducer);
  
  const { setIsActiveMenu } = useContext(Context);
  
  useEffect(() => {
    return setIsActiveMenu(true);
  }, []);

  return (
    <div className="notfound-field">
      <div className="header"></div>
      <div className="notfound wave-animation">
        <div>
          <div>
            <span>404</span>
          </div>
          <div>
            <span>PAGE</span>
            <span>NOT FOUND</span>
          </div>
        </div>
        <div className="bg-top">
          <div className="wave wave-top"></div>
        </div>
        <div className="bg-middle">
          <div className="wave wave-middle"></div>
        </div>
        <div className="bg-bottom">
          <div className="wave wave-bottom"></div>
        </div>
      </div>
      <div className="other-pages">
        <div className="position">
          {buttonsMenu.map((item: any, id: number) => {
            return (
              <>
                {item.dropdown &&
                  <div key={id}>
                    <h1>{item.name}</h1>
                    <ul>
                      {item.dropdown?.map((item: any, id: number) => {
                        return (
                          <li key={id}>
                            <Link href={item.url}>{item.name}</Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                }
              </>
            )
          })}
        </div>
      </div> 
    </div>  
  )
}