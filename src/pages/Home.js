import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

function Home() {
  const [value, setValue] = useState("");
  const [originUrl, setOriginUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shortenUrl, setShortenUrl] = useState("");
  const handleClick = () => {
    setOriginUrl(value);
    setValue("");
  };
  // token -> 694298cdf05ad01bebd4fc1cc20c13885489d5d3

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${originUrl}`
      );
      setShortenUrl(res.data.result.full_short_link);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (originUrl.length) {
      getData();
    }
  }, [originUrl]);
  if (loading) return <div>loading...</div>;

  return (
    <div>
      <h1>shortner</h1>
      <div>
        <input
          type="text"
          placeholder="URL 붙여넣기"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>줄이기</button>
      </div>
      {originUrl ? (
        <div>
          <p>{originUrl}</p>
          <CopyToClipboard text={shortenUrl} onCopy={() => setCopied(true)}>
            {copied ? <button>복사완료</button> : <button>복사하기</button>}
          </CopyToClipboard>
        </div>
      ) : (
        ""
      )}
      <h1>{shortenUrl}</h1>
    </div>
  );
}

export default Home;
