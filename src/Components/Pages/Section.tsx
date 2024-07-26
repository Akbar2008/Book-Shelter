import Arrow from "../../../public/icon/arrow.svg";
import Book from "../../../public/icon/book.svg";

export const Section = () => {
  
  return (
    <section className="w-full min-h-screen">
      <div className="w-[1440px] m-auto flex ">
        <div className="w-[268px] p-[25px]">
          <h2 className="text-2xl font-normal mb-1">Bookmarks</h2>
          <p className="text-sm mb-[25px]">
            If you don’t like to read, you haven’t found the right book
          </p>
          <div className="w-[218px] h-[72px] flex items-center bg-[#f8fafd] rounded px-[10px] justify-between">
            <p>
              Python <br/>
              <span className="font-medium font-serif text-[757881] text-[13px]">
                David M. Beazley
              </span>
            </p>
            <div className="flex gap-[5px]">
              <Book  className='cursor-pointer'/>
              <Arrow className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
