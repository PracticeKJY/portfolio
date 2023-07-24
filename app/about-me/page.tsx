import AboutMe from "./AboutMe"

const Content = async () => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-Type": "application/json",
      authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "WorkPeriod",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  }

  const response = await fetch(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    options
  )

  const dataJSON = await response.json()

  return <AboutMe data={dataJSON} />
}

export default Content
