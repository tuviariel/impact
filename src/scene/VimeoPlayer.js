import React, {useState} from 'react'
import ReactPlayer from 'react-player'

const VimeoPlayer = (props) => {
    const [infoOpen, setInfoOpen] = useState(false)
    let infoText="", infoShow, url=props.source;

    if(url==="https://youtu.be/_IcQwXrKInM"){//2 מרגיש רע – הסיפור הר-אקטיבי (הנרטיב שהתודעה רגילה לספר)
        infoText= 
        <div className="longText" >
            <div>אנחנו נוטים לחשוב על המציאות כדבר נפרד מאיתנו, כמשהו אובייקטיבי, חיצוני לנו. אך המציאות אינה מתקיימת בנפרד מאיתנו. למעשה, מה שהופך את המציאות שלנו למה שהיא, זו הפרשנות שאנחנו נותנים למה שמתרחש. נכון, העובדות הן עובדות (אם כי גם עליהן אנחנו נוטים להתווכח), אך המשמעות שהתודעה שלנו מייחסת להן היא שהופכת את העובדות האלה למציאות שאנחנו חווים.</div><br />
            <div>התודעה שלנו מספקת לנו פרשנות רציפה (און ליין) בזמן אמת על ה"מציאות" ומספרת לנו באופן שוטף מה מתרחש.</div>
            <div>הסיפור שהתודעה שלנו מספרת לנו באופן קבוע ואוטומטי מבוסס על מערכת ההפעלה הלא מודעת שלנו. פירושו של דבר שאנחנו מותנים לפרש את המציאות תמיד באותו אופן. זיהוי ההתניה/המשוואה תודעתית שלנו, מאפשר להבין את הסיפור (נרטיב) שהתודעה שלנו מספרת לעצמה באופן קבוע.</div><br />
            <div>ככלל ניתן לומר כי מקורם של החיווטים שלנו בסיפור שסיפרנו לעצמנו ושסיפרו לנו שנים על גבי שנים. הסיפור (הנרטיב של התודעה שלנו) מכיל הבנות שלנו על החיים, הבנות על מערכת היחסים שלנו עם העולם ושל העולם איתנו, ועל מה ניתן לצפות מן האנשים והעולם שסובב אותנו. ההתניות החזקות והשורשיות ביותר נוצרות בשלבי חיינו הראשונים, עד גיל 8-10 בערך, משם הן כבר עובדות באופן אוטומטי כברירת המחדל של התודעה.</div>
        </div>
    }
    if(url==="https://youtu.be/ZvSpwpfLTAM"){//3 מרגיש רע – סיפור חדש – אותו דבר רק הפוך
        infoText= 
        <div className="longText" >
            <div>אחרי שאנחנו מגלים את הסיפור שהתודעה שלנו רגילה לספר לעצמה ואת ההתניות שלנו עלינו להכיר בכך ש"ה"אמת שאנחנו אוחזים בה ומאמינים בה אינה אמת אבסולוטית, מוחלטת וחד משמעית. ההתניות שלנו אינן אלא משהו שהתרגלנו לחשוב, שחשבנו אותו כל כך הרבה פעמים עד שלמדנו לקבל אותו כאמת. ההבנה שלא מדובר באמת אלא בהתניה פותחת לנו את המרחב לסיפור חדש. סיפור שייטיב איתנו. סיפור שיאפשר לנו להשתחרר מחזקתן של ההתניות שלנו. סיפור שייתן לנו חופש בחירה ויאפשר לנו לפעול בדרך שונה ממה שאנחנו רגילים באוטומט הקבוע שלנו. איך כותבים את הסיפור החדש? - אותו דבר רק הפוך! לוקחים את הסיפור שכתבנו בסעיף הקודם ומשכתבים אותו בהיפוך. ההיפוך נעשה באופן מילולי ומתודי. מומלץ לכתוב את הסיפור החדש בזמן הווה.</div><br />
            <div>דוגמא:</div>
            <div className="bold">הסיפור הר-אקטיבי/ הסיפור שהתודעה שלי רגילה לספר:</div>
            <div>אני מפחד להישאר לבד. אני מרגיש דחוי. אני לא מספיק טוב בשביל למצוא זוגיות. יש לי נטייה להרוס כל קשר זוגי שאני נכנס אליו.</div>
            <div className="bold">הסיפור הקריאטיבי/ הסיפור החדש (אותו דבר רק הפוך):</div>
            <div>אני חי בזוגיות ומרגיש בטוח ב"ביחד" שלי. אני מרגיש רצוי ואהוב. אני נפלא כמו שאני וראוי לאהבה. אני מוצלח בבניית זוגיות, יש לי נטייה לשמור ולהעצים כל קשר זוגי שאני נכנס אליו.</div><br />
            <div>דוגמא:</div>
            <div className="bold">מה הוציא אותי מאיזון:</div>
            <div>בסופש האחרון שלא נפגשנו, היא לא כתבה לי אפילו פעם שהיא אוהבת אותי.</div>
            <div className="bold">איך פירשתי את מה שקרה: הסיפור הר-אקטיבי/ הסיפור שהתודעה שלי רגילה לספר:</div>
            <div>התשוקה שלה אלי פחותה.  היא פחות מחפשת להיפגש, פחות סקרנית כלפי. פחות בעניין שלי. אני זה שתמיד מתאמץ יותר, ואם צריך לג׳נגל, לקמבן, להתאים, להזיז..  – אני אעשה הכל – העיקר ליצור לנו זמן ביחד. להסיר הפרעות. הייתי אפילו אומר שביחס למיקום שלה הלהט שלי מרגיש כמו לחץ.</div>
            <div>היא אומרת שהיא קרובה ואוהבת, אבל זה מרגיש שהאהבה שלה היא יותר אמירה ופחות אמיתית.</div>
            <div>היא כבר לא מתלהבת ממני. ולפעמים אני אפילו מרגיש שהיא צמאה לאוויר, לשקט. כאילו ההתנהגות שלה משדרת לי: "תעזוב אותי באמאשך". אני מרגיש דחוי. כאילו היא עושה לי טובה. כאילו אני עוד משימה שלה ולא אהבה. בטח לא אהבת חייה.</div>
            <div className="bold">ההתניות הפעילות:</div>
            <div>אני לבד.</div>
            <div>אם אני לא מתאמץ ועושה כלום לא קורה.</div>
            <div>אין על מי לסמוך.</div>
            <div>אני דחוי.</div>
            <div className="bold">הסיפור הקריאטיבי/ הסיפור החדש (אותו דבר רק הפוך):</div>
            <div>היא כל הזמן כותבת ואומרת לי שהיא אוהבת אותי.</div>
            <div>התשוקה שלה אלי עצומה. היא תמיד רוצה להיפגש איתי. היא סקרנית כלפי ומתעניינת בי. אני יודע ומרגיש שהיא מאוהבת בי לחלוטין. שנינו משתדלים ועושים מאמץ לעשות הכל כדי לפנות זמן לביחד שלנו. האהבה שלה אמיתית. היא מתלהבת ממני. היא אוהבת להיות איתי, אוהבת להיות קרובה אלי. אוהבת לבלות איתי. היא צמאה לזמן המשותף שלנו. ההתנהגות שלה משדרת לי אהבה ותשוקה. אני מרגיש רצוי ואהוב ונחשק. אני אהבת חייה.</div>
        </div>
    }
    if(url==="https://youtu.be/YLc9i7DVGVg"){//10 מרגיש טוב – מה אני רוצה
        infoText= 
        <div className="longText" >
            <div>עצמו עיניים, ושאלו את עצמכם:</div>
            <div>"בעולם מושלם, שהכול בו אפשרי, מה אני רוצה?"</div><br />
            <div>הכל אפשרי משמעו:</div>
            <div>1. יש לי את כל הכסף שבעולם ואין מגבלה כלכלית.</div>
            <div>2. הסביבה החברתית תומכת בכל מה שאני רוצה.</div>
            <div>3. אני יודע שאני בעל ערך וראוי לאהבה מעצם היותי (אני לא רוצה כדי להוכיח שאני ראוי).</div>
            <div>4. אני רוצה את מה שאני רוצה פשוט כי זה כיף, ולא רק כדי להשיג מטרה או לסמן V ברשימה.</div><br />
            <div>התשובה לשאלה הזו יכולה להיות רשימה אינסופית של דברים, קטנים או גדולים, חשובים או איזוטריים, חומריים או רוחניים.</div>
            <div>מותר לרצות הכול ומלא, ובלבד שהכלל הבא נשמר: הרצון שלנו חופשי.</div><br />
            <div>איך אדע אם הגדרתי רצון חופשי:</div>
            <div>1. התשובה שלי לשאלה "מה יקרה אם לא?" (הרצון לא יתממש במציאות) היא: "כלום".</div>
            <div>2. הרצון שלי עונה על השאלה: "מה אני רוצה?" ולא הוחלף בשאלות: "מה אני יכול להשיג?" או "מה סביר שאקבל התשובה?".</div>
        </div>    
    }
    if(url==="https://youtu.be/QrD8H8Xm2bU"){//11 מרגיש טוב – מראה חיובית
        infoText=
        <div className="longText" >
            <div>המראה החיובית שלי:</div>
            <div>השלב השני ביצירת המציאות הוא שלב של דמיון. אחרי שענינו על השאלה מה אני רוצה? אנחנו עוברים לשלב של "תודעה מכוונת". בשלב הזה אנו מכווננים את התודעה שלנו ליצירה. ממש כמו שמכוונים כלי נגינה.</div>
            <div>איך מכווננים את התודעה? בעזרת "מראה חיובית": = מ(מוחשית)ר(רגשית)א(אישית)ה(הווה) חיובית.</div><br />
            <div className="bold">מוחשית</div>
            <div>איך יוצרים מראה מוחשית?</div>
            <div>שאלו את עצמכם: אם המציאות שאני רוצה הייתה מתרחשת עכשיו, סביבי ממש, כיצד הייתי מתאר אותה?</div>
            <div>דמיינו את עצמכם ממש שם, כלומר כאן, כאילו זה קורה ברגע זה ואתם מתארים את המציאות מבפנים, כמו כתב שטח, מתוך החוויה שלכם: איפה אתם נמצאים? מי נמצא איתכם? איך נראה המקום?</div>
            <div>זיכרו, כשאתם נוכחים במקום כלשהו כל החושים שלכם מעורבים ופעילים: לחוויה שלכם יש טעם וריח וצבע וצליל ותחושה.</div><br />
            <div className="bold">רגשית</div>
            <div>הפן הרגשי של המראה החיובית מתייחס לשני היבטים.</div>
            <div>1. החוויה הרגשית שעצם הרצון שלנו והפעולה של לדמיין אותו מעורר בנו מראה חיובית מאפשרת לנו לחוות את אותן תחושות נפלאות שנרגיש כשהמציאות הרצויה תתממש, כבר עכשיו, רק מלדמיין את זה קורה. לכן, אתם רוצים לדמיין ולכתוב את הרצון החופשי שלכם כך שעצם קריאת החזון שלכם תרגש אתכם; שעצם המחשבה והדמיון של המציאות הרצויה ימלאו אתכם שמחה, התלהבות, סיפוק, הנאה, התרחבות, אהבה והשראה. זוכרים כשהייתם ילדים ושיחקתם ב"נגיד ש"? זוכרים שעפתם רק מלדמיין? תודעה מכוונת היא תודעה שמחזיקה תדר רגשי של הנאה מעצם המשחק הזה שנקרא יצירה.</div>
            <div>במשפט אחד: מראה חיובית היא מראה מרגשת. הרשו לעצמכם להתרגש!!</div>
            <div>2. שחרור מחשיבה רציונלית.</div>
            <div>המראה החיובית מאפשרת לנו לראות את המציאות מנקודת מבט אופטימלית: איך היו נראים חיינו לו כל מה שאנחנו רוצים ומדמיינים היה אפשרי. עבור השכל ההגיוני שלנו זוהי נקודת מבט מופרכת, משום שביחס למיקום הנוכחי שלנו, זוהי נקודת מבט דמיונית לחלוטין. כשהשכל שלנו לא מצליח לשרטט את המסלול – איך נגיע מפה לשם? - כשהוא לא יודע איך (לעזאזל) נצליח להגיע מאיפה שאנחנו נמצאים עכשיו למקום בו אנחנו רוצים להיות, הוא נעצר ואמר לנו בפסקנות: "אי אפשר". אבל האמת היא שזה שאנחנו לא יודעים איך, לא אומר שזה בלתי אפשרי. כאשר אנחנו מגבילים את עצמנו לאזור הנוחות המוכר, למה שאנחנו כבר יודעים מהעבר, אנחנו לא עוסקים ביצירה אלא בשחזור. חשיבה רציונלית ותוצאתית, כמו גם תכנון, בהחלט חשובים ומועילים, אבל תפקידם לשרת את היצירה שלנו ולא לחסום אותה.</div><br />
            <div className="bold">אישית</div>
            <div>המראה החיובית עוסקת רק בנו, ומייצגת את הרצונות והתשוקות שלנו לגבי עצמנו. מה הייתי רוצה לעשות ומי אני רוצה להיות? איך הייתי רוצה לחיות? מה הייתי רוצה לחוות?</div><br />
            <div className="bold">הווה</div>
            <div>המראה החיובית מחזיקה את המציאות הרצויה בזמן הוֹוֶה, כאילו היא קיימת כבר עכשיו.</div><br />
            <div className="bold">חיובית</div>
            <div>1. מראה חיובית ממוקדת במה שאנחנו כן רוצים. היו ערניים: שימו לב שאינכם נסחפים להתעסק עם מה שאתם לא רוצים..</div>
            <div>2. כשאנחנו מתבוננים במראה החיובית אנחנו רואים את דמותנו העתידית בגרסה הכי נפלאה שלה בעיני עצמנו.</div>
        </div>
    }

    if(infoText!==""){
        infoShow = <div className="videoInfo">
                        <div className="videoInfoButton" onClick={()=>{infoOpen ? setInfoOpen(false) : setInfoOpen(true)}}><div className={`plus ${infoOpen ? 'x' : ''}`}></div></div>
                        <div className="videoInfoBox" style={{display: infoOpen ? "flex" : "none"}}>{infoText}</div>
                    </div>
    }
    else {
        infoShow = <div className="videoinfo"></div>
    }
    return(
        <div className="videoWrapper">
            <ReactPlayer className="videoPlayer" url={url} playing controls volume={1} muted playsinline width="100%" height="100%"/>
            {infoShow}
        </div>
    )
}
export default VimeoPlayer