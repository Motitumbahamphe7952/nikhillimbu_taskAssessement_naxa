// // import { NavLink } from "react-router-dom";

// // type DropdownName = "portfolio" | "company" | "events" | null;

// // export interface DropdownItem {
// //   name: string;
// //   dropdownName: DropdownName;
// //   items: {
// //     to: string;
// //     text: string;
// //     icon?: string;
// //   }[];
// // }

// // interface DropdownMenuProps {
// //   dropdown: DropdownItem;
// //   isMobile?: boolean;
// //   isOpen: boolean;
// //   onClose?: () => void;
// //   refCallback?: (el: HTMLDivElement | null) => void;
// // }

// // const DropdownMenu = ({
// //   dropdown,
// //   isMobile = false,
// //   isOpen,
// //   onClose,
// //   refCallback,
// // }: DropdownMenuProps) => {
// //   if (!isMobile && !isOpen) return null;

// //   return (
// //     <div
// //       className={`${
// //         isMobile
// //           ? "pl-4 pb-2"
// //           : `absolute left-0 top-full bg-white shadow-md mt-2 rounded-md w-[300px] z-10 transition-all duration-200 ease-in ${
// //               isOpen
// //                 ? "opacity-100 pointer-events-auto translate-y-0"
// //                 : "opacity-0 pointer-events-none -translate-y-1"
// //             }`
// //       }`}
// //       ref={refCallback || null}
// //     >
// //       {!isMobile && (
// //         <span
// //           className="absolute -top-3 left-6 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"
// //         />
// //       )}
// //       {dropdown.items.map((item) => (
// //         <NavLink
// //           key={item.to}
// //           to={item.to}
// //           className={`flex items-center gap-2 px-4 py-2 hover:bg-[#ffdf20] transition-colors duration-150 ${
// //             isMobile ? "block text-gray-600" : ""
// //           }`}
// //           onClick={() => {
// //             if (onClose) onClose();
// //           }}
// //         >
// //           {!isMobile && item.icon && (
// //             <img
// //               src={item.icon}
// //               alt={item.text}
// //               className="h-5 w-5 object-contain"
// //             />
// //           )}
// //           {item.text}
// //         </NavLink>
// //       ))}
// //     </div>
// //   );
// // };

// // export default DropdownMenu;


// // File: src/components/DropdownMenu.tsx
// import { NavLink } from "react-router-dom";

// export type DropdownName = "portfolio" | "company" | "events" | null;

// export interface DropdownItem {
//   name: string;
//   dropdownName: DropdownName;
//   items: {
//     to: string;
//     text: string;
//     icon?: string;
//   }[];
// }

// interface DropdownMenuProps {
//   dropdown: DropdownItem;
//   isMobile?: boolean;
//   isOpen: boolean;
//   onClose?: () => void;
//   refCallback?: (el: HTMLDivElement | null) => void;
// }

// const DropdownMenu = ({
//   dropdown,
//   isMobile = false,
//   isOpen,
//   onClose,
//   refCallback,
// }: DropdownMenuProps) => {
//   if (!isMobile && !isOpen) return null;

//   return (
//     <div
//       className={`${
//         isMobile
//           ? "pl-4 pb-2"
//           : `absolute left-0 top-full bg-white shadow-md mt-2 rounded-md w-[300px] z-10 transition-all duration-200 ease-in ${
//               isOpen
//                 ? "opacity-100 pointer-events-auto translate-y-0"
//                 : "opacity-0 pointer-events-none -translate-y-1"
//             }`
//       }`}
//       ref={refCallback || null}
//     >
//       {!isMobile && (
//         <span
//           className="absolute -top-3 left-6 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"
//         />
//       )}
//       {dropdown.items.map((item) => (
//         <NavLink
//           key={item.to}
//           to={item.to}
//           className={`flex items-center gap-2 px-4 py-2 hover:bg-[#ffdf20] transition-colors duration-150 ${
//             isMobile ? "block text-gray-600" : ""
//           }`}
//           onClick={() => {
//             if (onClose) onClose();
//           }}
//         >
//           {!isMobile && item.icon && (
//             <img
//               src={item.icon}
//               alt={item.text}
//               className="h-5 w-5 object-contain"
//             />
//           )}
//           {item.text}
//         </NavLink>
//       ))}
//     </div>
//   );
// };

// export default DropdownMenu;


// src/components/Home/DropdownMenu.tsx

import { NavLink } from "react-router-dom";

// 1) Export these so NavBar can import them:
export type DropdownName = "portfolio" | "company" | "events" | null;

export interface DropdownItem {
  name: string;
  dropdownName: DropdownName;
  items: {
    to: string;
    text: string;
    icon?: string;
  }[];
}

interface DropdownMenuProps {
  dropdown: DropdownItem;
  isMobile?: boolean;
  isOpen: boolean;
  onClose?: () => void;
  refCallback?: (el: HTMLDivElement | null) => void;
}

const DropdownMenu = ({
  dropdown,
  isMobile = false,
  isOpen,
  onClose,
  refCallback,
}: DropdownMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      ref={refCallback || null}
      className={
        isMobile
          ? "bg-white shadow-md rounded-md pl-4 pb-2 mt-2"
          : `absolute left-0 top-full bg-white shadow-md mt-2 rounded-md 
             w-[300px] z-10 transition-all duration-200 ease-in ${
               isOpen
                 ? "opacity-100 pointer-events-auto translate-y-0"
                 : "opacity-0 pointer-events-none -translate-y-1"
             }`
      }
    >
      {!isMobile && (
        <span className="absolute -top-3 left-6 w-0 h-0
                         border-l-[10px] border-r-[10px] border-b-[10px]
                         border-l-transparent border-r-transparent border-b-white"/>
      )}
      {dropdown.items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={`flex items-center gap-2 px-4 py-2
                      hover:bg-[#ffdf20] transition-colors duration-150 ${
                        isMobile ? "block text-gray-600" : ""
                      }`}
          onClick={() => onClose?.()}
        >
          {item.icon && (
            <img src={item.icon} alt={item.text} className="h-5 w-5"/>
          )}
          {item.text}
        </NavLink>
      ))}
    </div>
  );
};

export default DropdownMenu;
