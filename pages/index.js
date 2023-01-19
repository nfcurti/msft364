import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from "framer-motion"

export default function Home() {
  const [pOneSel, setPOneSel] = useState(0);

  const [oneEnabled, setOneEnabled] = useState(true);
  const [twoEnabled, setTwoEnabled] = useState(true);
  const [threeEnabled, setThreeEnabled] = useState(true);
  const [fourEnabled, setFourEnabled] = useState(true)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

       <div className='homebg'>
       { oneEnabled ?<motion.div 
       initial={{ opacity: 0, scale: 1.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.25 }}
       className='alpha-box'>
          <div className='alpha-box-header'>
            <img src='/assets/winwhite.png'/>
            <p>Microsoft-Windows-Virus-Alert (050) 5479-2397</p>
          </div>
          <div className='alpha-box-container'>
            <div className='alpha-box-center'>
              <div className='alpha-box-center-left'>
                {
                  pOneSel == 0 ? <img src='/assets/pchigh.png'/> : <div/>
                }
                {
                  pOneSel == 1 ? <img src='/assets/shieldhigh.png'/> : <div/>
                }
                {
                  pOneSel == 2 ? <img src='/assets/speedhigh.png'/> : <div/>
                }
                {
                  pOneSel == 3 ? <img src='/assets/winlogo.png'/> : <div/>
                }
              </div>
              <div className='alpha-box-center-right'>
                <h2>あなたは保護されます</h2>
                <p>保護アップデート <span className='alpha-box-center-right-high-blue'>流れ</span></p>
                <p>最後のスキャン <span className='alpha-box-center-right-high-red'>利用できません </span><span className='alpha-box-center-right-high-blue'>| クイックスキャ</span></p>
                <p>使用ライセンス <span className='alpha-box-center-right-high-blue'>1/5| 別のデバイ</span></p>
              </div>
            </div>
            <div className='alpha-box-bottom'>
              <div onClick={() => setPOneSel(0)} className={`alpha-box-bottom-itemc ${pOneSel == 0 ? 'alpha-box-bottom-itemcover' : ''}`}>
                <h2>セキュリテ</h2>
                <div className='abbi-image-a'/>
                <h2>無効</h2>
              </div>
              <div onClick={() => setPOneSel(1)} className={`alpha-box-bottom-itemc ${pOneSel == 1 ? 'alpha-box-bottom-itemcover' : ''}`}>
              <h2>同一性</h2>
                <div className='abbi-image-b'/>
                <h2>危険にさらされて</h2>
              </div>
              <div onClick={() => setPOneSel(2)} className={`alpha-box-bottom-itemc ${pOneSel == 2 ? 'alpha-box-bottom-itemcover' : ''}`}>
              <h2>性能</h2>
                <div className='abbi-image-c'/>
                <h2>最適化された</h2>
              </div>
              <div onClick={() => setPOneSel(3)} className={`alpha-box-bottom-itemc ${pOneSel == 3 ? 'alpha-box-bottom-itemcover' : ''}`}>
              <h2>防火壁</h2>
                <div className='abbi-image-d'/>
                <h2>オフにする</h2>
              </div>
            </div>
            <div className='alpha-box-footer'>
              <p>ステータス :<span className='alpha-box-center-right-high-red'>PCでのリスクに</span></p>
            </div>
          </div>
          <div className='minimizeButton'><img src='/assets/minimize.png'/></div>
          <div className='closeButton'><img src='/assets/close.png'/></div>
        </motion.div> : <div/>  }

       { twoEnabled ?<motion.div 
       initial={{ opacity: 0, scale: 1.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.25, delay: 0.15 }} className='beta-box'>
          <div className='beta-box-header'>
            <h2>クイックスキャ</h2>
            <h3>走査共通感染地域のスタートアップファイルです</h3>
            <h3>C:WindowsSystem32sihost.exe</h3>
          </div>
          <div className='beta-box-center'>
                <p>結果の概要</p>
                <hr/>
                <div className='beta-box-center-row'>
                  <p>[+] スキャンされた合計項目:</p>
                  <p className='beta-box-center-row-right'>218</p>
                </div>
                <div className='beta-box-center-row'>
                  <p>[+] 総セキュリティリスク検出:</p>
                  <p className='beta-box-center-row-right'>0</p>
                </div>
                <div className='beta-box-center-row'>
                  <p>[+] 総合セキキュリティリスク解決:</p>
                  <p className='beta-box-center-row-right'>0</p>
                </div>
                <div className='beta-box-center-row'>
                  <p>注意が必要なセキュリティリスク:</p>
                  <p className='beta-box-center-row-right'>0</p>
                </div>
          </div>
         <div className='beta-box-buttons'>
         <div onClick={() => {
          setTwoEnabled(false);
          setTimeout(() => {
            setTwoEnabled(true)
            window.scrollTo(0, 0);
          }, 1000);
         }} className='beta-box-button beta-box-button-left'>一時停止</div>
          <div onClick={() => {
            setTwoEnabled(false);
            setTimeout(() => {
              setTwoEnabled(true)
              window.scrollTo(0, 0);
            }, 1000);
          }} className='beta-box-button'>止まれ</div>
         </div>
         <div onClick={() => {
          setTwoEnabled(false);
          setTimeout(() => {
            setTwoEnabled(true)
            window.scrollTo(0, 0);
          }, 0);
         }} className='minimizeButton'><img src='/assets/minimize.png'/></div>
          <div onClick={() => {
            setTwoEnabled(false);
            setTimeout(() => {
              setTwoEnabled(true)
              window.scrollTo(0, 0);
            }, 1000);
          }} className='closeButton'><img src='/assets/close.png'/></div>
        </motion.div> : <div/> } 

        { threeEnabled ? <motion.div 
       initial={{ opacity: 0, scale: 1.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.25, delay: 0.3 }} className='gamma-box'>
          <h3>Windows-Defender-セキュリティ合告</h3>
          <p>** アクセスはこのパソコンのプロックセキュリティ上の理由 **</p>
          <p>お使いのコンピュータは、それがトロイの木馬のスパイウェアに三数してい ること 以下のデータが侵害されました。</p>
          <br/>
          <p>&gt; メール人資格情報</p>
          <p>&gt; 銀行だスワード</p>
          <p>&gt; Facebookログイン</p>
          <p>&gt; 写真質料</p>
          <br/>
          <p>Windows-Defender_Scanは、あなたのパスワードを盗むことができ、こ のデバイス上の潜在的に不要なアドウェアを発見しました,オンラテインid財 物情報個人ファイル</p>
          <br/>
          <p>私達のエンジニアが電話による取り外しプロセスによって歩くことができる ように私達にすぐに連絡しな</p>
          <br/>
          <p>コWindows支援すぐに報告する至威を予防するため、盗難およびロック解 除アクセス装暫です。</p>
          <br/>
          <p>このウィンドウを閉じると、お客様の個人情報が危険にさらされ、 Windows登録が停止されます。</p>
          <br/>
          <p>Windowsサポートに連絡する: (050) 5479-2397</p>
          <br/>
          <div className='gamma-box-buttons'>
            <div onClick={() => {
              setThreeEnabled(false);
              setTimeout(() => {
                setThreeEnabled(true)
                window.scrollTo(0, 0);
              }, 1000);
            }} className='gamma-box-button'>
              <p>キャンセル</p>
            </div>
            <div onClick={() => {
              setThreeEnabled(false);
              setTimeout(() => {
                setThreeEnabled(true)
                window.scrollTo(0, 0);
              }, 1000);
            }} className='gamma-box-button'>
              <p>OK</p>
            </div>
          </div>
        </motion.div> : <div/> }

        { fourEnabled ? <motion.div 
       initial={{ opacity: 0, scale: 1.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.25, delay: 0.45 }} className='epsilon-box'>
          <div className='epsilon-box-header'>
            <h2>Windowsファイアウォール</h2>
          </div>
          <div className='epsilon-bottom'>
            <h2>Virus_Alert-エラーコード:弁DW6BD36</h2>
            <h3>本 Windows アクセスはこのパソコンのプロックセキュリティ上の理由.</h3>
            <h3>Windowsサポートに連結する: (050) 5479-2397</h3>
          </div>
          <div className='epsilon-footer'>
            <div className='epsilon-footer-left'>
                <p>青威が検出された-Virus SPywgre</p>
                <p>のでは: Ads.financetrack(1).exe</p>
            </div>
            <div className='epsilon-footer-right'>
                <div onClick={() => {
                  setFourEnabled(false);
                  setTimeout(() => {
                    setFourEnabled(true)
                    window.scrollTo(0, 0);
                  }, 1000);
                }} className='epsilon-button' style={{backgroundColor: 'white', color: '#6DA4FA'}}>一時停止</div>
                <div onClick={() => {
                  setFourEnabled(false);
                  setTimeout(() => {
                    setFourEnabled(true)
                    window.scrollTo(0, 0);
                  }, 1000);
                }} className='epsilon-button' style={{backgroundColor: '#E94D1C'}}>止まれ</div>
            </div>
          </div>
          <div className='epsilon-center-logo'>
            <img src='/assets/winlogo.png'/>
          </div>
          <div onClick={() => {
            setFourEnabled(false);
            setTimeout(() => {
              setFourEnabled(true)
              window.scrollTo(0, 0);
            }, 0);
          }} className='minimizeButton'><img src='/assets/minimize.png'/></div>
          <div onClick={() => {
            setFourEnabled(false);
            setTimeout(() => {
              setFourEnabled(true)
              window.scrollTo(0, 0);
            }, 1000);
          }} className='closeButton'><img src='/assets/close.png'/></div>
        </motion.div> : <div/> }

       </div>
      </main>
    </>
  )
}
