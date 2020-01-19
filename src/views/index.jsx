var React = require('react');

function GuildCreation(props) {
  return (
        <div>
            Enter your Guild name to get a unique form room.
            <form action="/guild/create" method="post">
                <input type="text" name="guild"/>
                <input type="submit" />
            </form>
        </div>
  );
}

module.exports = GuildCreation;
