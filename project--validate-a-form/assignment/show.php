<!DOCTYPE html>
<html lang="en">
<head>
  <title>Submitted Form Results</title>
  <meta charset="utf-8"/>
</head>
<body>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Input</th>
      </tr>
    </thead>
    <tbody>
      <?php
      foreach ($_REQUEST as $key => $value) {
        if ($key === "PHPSESSID") {
          continue;
        }
        if (substr($key, 0, strlen("SQLiteManager")) === "SQLiteManager") {
          continue;
        }
        ?>
        <tr>
          <?php
          echo("<td class='input_name'>" . htmlspecialchars($key) . "</td>");
          $printValue = $value;
          if (is_array($value)) {
            $printValue = join(", ", $value);
          }
          echo("<td>" . htmlspecialchars($printValue) . "</td>\n");
          ?>
        </tr>
        <?php
      }
      ?>
    </tbody>
  </table>
  <p>
    <a href="index.html">Click here to return to the home page</a>
  </p>
</body>
</html>
