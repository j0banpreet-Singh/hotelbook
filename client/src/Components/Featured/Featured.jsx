import "./featured.css"
import useFetch from "../../hooks/useFetch"

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=toronto,london,Brampton")

  return (
    <div className="featured">
      {loading?"Loading please Wait...":
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/acj-2203-places-to-visit-in-dublin-1.jpg" alt="dublin" />
            <div className="featuredTitles">
              <h1>Toronto</h1>
              <h1>{data[0]} properties</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://imageio.forbes.com/blogs-images/laurabegleybloom/files/2019/05/Capitol-Views-1200x788.jpg?format=jpg&width=960" alt="dublin" />
            <div className="featuredTitles">
              <h1>London</h1>
              <h1>{data[1]} properties</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://content.r9cdn.net/rimg/dimg/97/b0/961eb3a8-city-7128-16764004bcf.jpg?crop=true&width=1366&height=768&xhint=1740&yhint=2462" alt="dublin" />
            <div className="featuredTitles">
              <h1>Brampton</h1>
              <h1>{data[2]} properties</h1>
            </div>
          </div>
        </>}
    </div>

  )
}

export default Featured
