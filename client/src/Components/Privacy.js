import { React, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Privacy = (props) => {
  const [useGerman, setLang] = useState(false);
  const setLangFromChild = (lang) => {
    setLang(lang);
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header setLangOfParent={setLangFromChild} />
      <main>
        <header>
          <div className="top-10 md:top-40 relative mx-auto py-6 px-10 md:px-40">
            <h1 className="text-3xl text-center md:text-left  font-bold text-gray-900 md:w-8/12">
              {useGerman ? "Datenschutz­erklärung" : "PRIVACY"}
            </h1>
          </div>
        </header>
        <div className="flex-1 top-10 md:top-40 relative pl-10 pr-6 md:px-40 pb-20">
          <div className="py-2" />
          <ul className="list-decimal">
            <h2 className="text-justify font-bold text-2xl md:text-left text-gray-900 md:w-8/12">
              <li>Datenschutz auf einen Blick</li>
            </h2>
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Allgemeine Hinweise
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Die folgenden Hinweise geben einen einfachen &Uuml;berblick
              dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
              Sie diese Website besuchen. Personenbezogene Daten sind alle
              Daten, mit denen Sie pers&ouml;nlich identifiziert werden
              k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz
              entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten
              Datenschutzerkl&auml;rung.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Datenerfassung auf dieser Website
            </h3>
            <h4 className="text-justify font-bold text-lg md:text-left text-gray-900 md:w-8/12">
              Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
              Website?
            </h4>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
              Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
              dieser Datenschutzerkl&auml;rung entnehmen.
            </p>
            <div className="py-2" />
            <h4 className="text-justify font-bold text-lg md:text-left text-gray-900 md:w-8/12">
              Wie erfassen wir Ihre Daten?
            </h4>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
              Sie in ein Kontaktformular eingeben.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
              Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
              allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem
              oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten
              erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            <div className="py-2" />
            <h4 className="text-justify font-bold text-lg md:text-left text-gray-900 md:w-8/12">
              Wof&uuml;r nutzen wir Ihre Daten?
            </h4>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
              k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            <div className="py-2" />
            <h4 className="text-justify font-bold text-lg md:text-left text-gray-900 md:w-8/12">
              Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
            </h4>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
              Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
              Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
              erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
              f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
              Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
              Aufsichtsbeh&ouml;rde zu.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen
              Sie sich jederzeit an uns wenden.
            </p>
            <div className="py-2" />
            <h2 className="text-justify font-bold text-2xl md:text-left text-gray-900 md:w-8/12">
              <li>Hosting und Content Delivery Networks (CDN)</li>
            </h2>
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Externes Hosting
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
              und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe und sonstige Daten, die &uuml;ber eine Website
              generiert werden, handeln.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Der Einsatz des Hosters erfolgt zum Zwecke der
              Vertragserf&uuml;llung gegen&uuml;ber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs.
              1 lit. f DSGVO).
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
              zur Erf&uuml;llung seiner Leistungspflichten erforderlich ist und
              unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Wir setzen folgenden Hoster ein:
            </p>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Google Firebase
            </p>
            <div className="py-2" />
            <h2 className="text-justify font-bold text-2xl md:text-left text-gray-900 md:w-8/12">
              <li>Allgemeine Hinweise und Pflicht&shy;informationen</li>
            </h2>
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Datenschutz
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer
              pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerkl&auml;rung.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
              mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
              Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche
              Daten wir erheben und wof&uuml;r wir sie nutzen. Sie
              erl&auml;utert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet
              (z.&nbsp;B. bei der Kommunikation per E-Mail)
              Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
              dieser Website ist:
            </p>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Piv Joze, PU-Berlin
              <br />
              Berlin
            </p>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Telefon: +49 176 61289082
              <br />
              E-Mail: joze.piv@web.de
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
              Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
              und Mittel der Verarbeitung von personenbezogenen Daten
              (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Speicherdauer
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
              speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
              Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
              L&ouml;schersuchen geltend machen oder eine Einwilligung zur
              Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
              sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
              f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben (z.B.
              steuer- oder handelsrechtliche Aufbewahrungsfristen); im
              letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall dieser
              Gr&uuml;nde.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
              ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die
              Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Widerspruchsrecht gegen die Datenerhebung in besonderen
              F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E
              ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
              GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
              GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
              EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
              GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
              DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
              DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
              WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
              VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
              SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
              NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
              &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
              AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
              (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG
              ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN
              DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM
              ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS
              PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG
              STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
              ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
              (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Beschwerde&shy;recht bei der zust&auml;ndigen
              Aufsichts&shy;beh&ouml;rde
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
              Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
              insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
              Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
              unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Recht auf Daten&shy;&uuml;bertrag&shy;barkeit
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen,
              maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie
              die direkte &Uuml;bertragung der Daten an einen anderen
              Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
              machbar ist.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              SSL- bzw. TLS-Verschl&uuml;sselung
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
              &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
              Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
              senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
              verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von &bdquo;http://&ldquo; auf
              &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
              k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
              Dritten mitgelesen werden.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Auskunft, L&ouml;schung und Berichtigung
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
              Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten
              k&ouml;nnen Sie sich jederzeit an uns wenden.
            </p>
            <div className="py-2" />
            <h3 className="text-justify font-bold text-xl md:text-left text-gray-900 md:w-8/12">
              Recht auf Einschr&auml;nkung der Verarbeitung
            </h3>
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
              jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
              Verarbeitung besteht in folgenden F&auml;llen:
            </p>
            <ul className="list-disc px-2 md:px-8">
              <li className="text-justify text-base md:text-lg md:w-8/12 ">
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
                der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <div className="py-2" />
              <li className="text-justify text-base md:text-lg md:w-8/12 ">
                Wenn die Verarbeitung Ihrer personenbezogenen Daten
                unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie statt
                der L&ouml;schung die Einschr&auml;nkung der Datenverarbeitung
                verlangen.
              </li>
              <div className="py-2" />
              <li className="text-justify text-base md:text-lg md:w-8/12 ">
                Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen,
                Sie sie jedoch zur Aus&uuml;bung, Verteidigung oder
                Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen, haben
                Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <div className="py-2" />
              <li className="text-justify text-base md:text-lg md:w-8/12 ">
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                Interessen vorgenommen werden. Solange noch nicht feststeht,
                wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </li>
            </ul>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
              ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
              oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
              Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
              nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
              eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
              Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
            <div className="py-1" />
            <p className="text-justify text-base md:text-lg md:w-8/12 ">
              {"Quelle: "}
              <a
                href="https://www.datenschutzerklaerung.de"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                https://www.datenschutzerklaerung.de
              </a>
            </p>
          </ul>
        </div>
        <div className="py-20" />
        <div className="flex-1">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Privacy;
