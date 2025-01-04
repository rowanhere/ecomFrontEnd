import React from 'react'
import { BiCommentAdd } from 'react-icons/bi'
import { ProductMenuButton } from './ProductMenu'

const MyCommentProduct = () => {
  return (
    <form>
        <div className="h-20 mt-2 w-full relative border-gray-400  group border-2 rounded-md commentDiv">
          <textarea
            type="text"
            name="comment"
            required
            className="border p-2 ease-linear duration-200 border-slate-200 outline-none bg-transparent font-light indent-3 w-full h-full"
          />
          <label
            htmlFor="comment"
            className="absolute z-[-1] font-josefin top-[10%] group-focus-within:top-[-40%]  group-focus-within:translate-x-1/2 group-focus-within:right-[50%] text-nowrap transition-all text-gray-500 left-[2%]"
          >
            Write your review here...
          </label>
        </div>
        <ProductMenuButton
          type="submit"
          className={
            "text-orange-500 mt-2 ml-auto text-sm w-[fit-content] border-orange-500"
          }
        >
          <BiCommentAdd size={19} />
          <span>Comment</span>
        </ProductMenuButton>
      </form>
  )
}

export default MyCommentProduct