// import ProjectPage from "./ProjectPage"

// const Content = async () => {
//   const options = {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Notion-Version": "2022-06-28",
//       "content-Type": "application/json",
//       authorization: `Bearer ${process.env.NOTION_TOKEN}`,
//     },
//     body: JSON.stringify({
//       sorts: [
//         {
//           property: "WorkPeriod",
//           direction: "descending",
//         },
//       ],
//       page_size: 100,
//     }),
//   }

//   const response = await fetch(
//     `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
//     options
//   )

//   const dataJSON = await response.json()

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
//         <div className="grid grid-cols-1 gap-6 p-12 m-4 md:grid-cols-2">
//           {dataJSON.results.map((data: any, index: any) => {
//             return (
//               <li key={index}>
//                 <ProjectPage
//                   name={
//                     data.properties.이름.title[0].plain_text
//                   }
//                   tag={data.properties.Skills.multi_select}
//                   WorkPeriod={
//                     data.properties.WorkPeriod.date
//                   }
//                   Description={
//                     data.properties.Description.rich_text[0]
//                       .plain_text
//                   }
//                   Github={
//                     data.properties.Github
//                       ? data.properties.Github.url
//                       : ""
//                   }
//                   imgSrc={
//                     data.cover.file.url ||
//                     data.cover.external.url
//                   }
//                 />
//               </li>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Content
