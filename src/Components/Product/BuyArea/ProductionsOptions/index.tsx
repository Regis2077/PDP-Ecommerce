import React from "react";
import Shipping from "./shipping";
import { OptionsList } from "./styles";

const ProductOptions = () =>{
  return (
    <div>
      <span>Color: Space Gray</span>
      <OptionsList>
        <li>
          <button>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#CFD1D2"/>
              <ellipse cx="20.0003" cy="19.9999" rx="16" ry="16" fill="#595961"/>
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#CFD1D2"/>
              <ellipse cx="20.0003" cy="19.9999" rx="16" ry="16" fill="#FFD1C2"/>
            </svg>
          </button>
        </li>
        <li>
          <button>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19.5" fill="white" stroke="#CFD1D2"/>
              <ellipse cx="20.0003" cy="19.9999" rx="16" ry="16" fill="#C8C8CF"/>
            </svg>
          </button>
        </li>
      </OptionsList>
      <span>Screen Size: </span>
      <OptionsList>
        <li>
          <button>
          </button>
        </li>
        <li>
          <button>

          </button>
        </li>
        <li>
          <button>

          </button>
        </li>
      </OptionsList>
      <Shipping/>
    </div>
  )
}

export default ProductOptions