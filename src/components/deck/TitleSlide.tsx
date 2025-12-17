interface TitleSlideProps {
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleHighlight?: string;
}

export function TitleSlide({ title, titleHighlight, subtitle, subtitleHighlight }: TitleSlideProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] text-center px-8">
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-8">
        {titleHighlight ? (
          <>
            <span className="text-foreground">{title}</span>
          </>
        ) : (
          <span className="text-foreground">{title}</span>
        )}
      </h1>
      {subtitle && (
        <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
          {subtitleHighlight ? (
            <>
              <span className="text-muted-foreground">{subtitle.split(subtitleHighlight)[0]}</span>
              <span className="text-foreground">{subtitleHighlight}</span>
              <span className="text-muted-foreground">{subtitle.split(subtitleHighlight)[1]}</span>
            </>
          ) : (
            <span className="text-muted-foreground">{subtitle}</span>
          )}
        </p>
      )}
    </div>
  );
}