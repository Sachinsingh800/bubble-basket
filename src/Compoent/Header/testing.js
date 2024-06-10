<div className={style.search_box}>
<button
  className={style.btn_search}
  onClick={handleToggleSearch}
>
  <div className={style.icon_box}>
    <img
      src={searchicon}
      alt="Search"
      title="Search"
      loading="lazy"
      width="auto"
      height="auto"
    />
  </div>
</button>
<input
  type="text"
  className={style.input_search}
  placeholder="Type to Search..."
  onChange={(e) => setSearch(e.target.value)}
/>
{showSearch && (
  <ul className={style.option_box}>
    {product
      ?.filter((elem) => {
        return elem?.title
          ?.toLowerCase()
          .includes(search?.toLowerCase());
      })
      ?.map((item) => (
        <li
          key={item?._id}
          onClick={() =>
            (window.location.href = `/Product/${item?._id}`)
          }
        >
          <div className={style.search_img_box}>
            <img
              src={item?.productImg[0]?.url}
              alt={item?.title}
              title="Our Company Logo"
              loading="lazy"
              width="auto"
              height="auto"
            />
          </div>
          <div className={style.price_box}>
            <h6>{item?.title}</h6>
            <span>${item?.price}</span>
          </div>
        </li>
      ))}
  </ul>
)}
</div>
