import icon from './logo.ico';

function Header(){
    return (
        <>
        <div className="w-full h-16 bg-gray-300  flex relative p-3 gap-2">

        <img src={icon} 
        className="w-10 h-10" />

         <p className="text-xl font-bold flex relative top-1 underline">@imAdityaGolu</p>
         
        </div>
        </>
    );
}

export default Header;