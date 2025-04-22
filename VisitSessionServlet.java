import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/visit")
public class VisitSessionServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession();

        Long lastVisitTime = (Long) session.getAttribute("lastVisit");
        Long currentTime = System.currentTimeMillis();

        out.println("<html><body>");
        out.println("<h2>Session Visit Tracker</h2>");

        if (lastVisitTime == null) {
            out.println("<p>This is your <strong>first visit</strong>.</p>");
        } else {
            long timeDifference = (currentTime - lastVisitTime) / 1000; // in seconds
            out.println("<p>Last visit was: <strong>" + new Date(lastVisitTime) + "</strong></p>");
            out.println("<p>Current visit is: <strong>" + new Date(currentTime) + "</strong></p>");
            out.println("<p>Time since last visit: <strong>" + timeDifference + " seconds</strong></p>");
        }

        session.setAttribute("lastVisit", currentTime);

        out.println("</body></html>");
    }
}