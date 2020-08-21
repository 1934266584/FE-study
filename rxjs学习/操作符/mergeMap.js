// merge 与 map 的结合

//concatMap 用在可以確定內部的 observable 結束時間比外部 observable 發送時間來快的情境，並且不希望有任何並行處理行為，適合少數要一次一次完成到底的的 UI 動畫或特別的 HTTP request 行為。

// switchMap 用在只要最後一次行為的結果， 適合絕大多數的使用情境。

// mergeMap 用在並行處理多個 observable， 適合需要並行處理的行為， 像是多個 I / O 的並行處理。
